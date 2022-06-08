<?php

namespace App\Http\Middleware;

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
        //xdebug_break();
        if($request->has("appid")){
            $request->merge([
                "grant_type"=>"client_credentials",
                "client_id"=>$request->input("appid"),
                "client_secret"=>$request->input("secret")
            ]);
//            $request->except([
//                "appid","secret"
//            ]);
            request()->request->remove('appid');
            request()->request->remove('secret');
        }
        return $next($request);
    }
}
