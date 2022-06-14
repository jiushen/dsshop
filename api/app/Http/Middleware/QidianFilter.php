<?php

namespace App\Http\Middleware;

use Lcobucci\JWT\Token\Parser;
use Lcobucci\JWT\Encoding\JoseEncoder;
use Laravel\Passport\Token;
use Closure;

class QidianFilter
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $qidian_flag = false;
        $user_flag = false;
        if($request->has("appid")){
            $qidian_flag = true;
            $request->merge([
                "grant_type"=>"client_credentials",
                "client_id"=>$request->input("appid"),
                "client_secret"=>$request->input("secret")
            ]);
            request()->request->remove('appid');
            request()->request->remove('secret');
        }else if ($request->has("access_token")){
            $user_flag = true;

            $token = $request->input("access_token");
            $user_token = (new Parser(new JoseEncoder()))->parse($token)->claims()->all()['jti'];
            $client = Token::find($user_token)->client;
            $request->merge([
                "grant_type"=>"authorization_code",
                "client_id"=>$client->id,
                "client_secret"=>$client->secret,
                "redirect_uri"=>$client->redirect,
            ]);//本来就带了code
            request()->request->remove('receptionType');
        }

        $response = $next($request);

        if($response->status()==200){
            $newret['code'] = 0;
            $newret['message'] = "success";

            if($qidian_flag)
            {
                $ret = $response->getContent();
                $retobj = json_decode($ret);
                $newret['data'] = [
                    "accessToken"=>$retobj->access_token
                ];
            }else if($user_flag){
                $ret = $response->getContent();
                $retobj = json_decode($ret);
                $rsp_token = $retobj->access_token;
                $user_token = (new Parser(new JoseEncoder()))->parse($rsp_token)->claims()->all()['jti'];
                $user_id = Token::find($user_token)->user_id;
                $user = \App\Models\v1\User::find($user_id);
                $newret['data'] = [
                    "openID"=>$user->uuid,
                    "type"=>99,
                    "nickname"=>$user->nickname,
                    "gender"=>$user->gender,
                    "avatar"=>$user->portrait,
                    "email"=>$user->email,
                    ];
            }
        }else{
            $newret['code'] = $response->status();
            $newret['message'] = $response::$statusTexts[$response->status()];
            $newret['data'] = "";
        }

        $response->setContent(json_encode($newret));

        return $response;
    }
}
