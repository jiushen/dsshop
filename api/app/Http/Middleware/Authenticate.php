<?php

namespace App\Http\Middleware;

use App\Code;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
//use Illuminate\Support\Facades\Redirect;

class QdAuthenticationException extends \Exception{

}

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param \Illuminate\Http\Request $request
     * @return string
     * @throws \Exception
     */
    protected function redirectTo($request)
    {
        //return Redirect::to('http://172.20.67.194:3002/pass/login');
        if (!$request->expectsJson()) {
//            exit('密钥已失效，请清空本地缓存');
            //throw new Exception('登录超时，请重新登录', 500);
            //throw new QdAuthenticationException('登录超时，请重新登录', 500);
            throw new AuthenticationException(
                'Unauthenticated.', [null], "http://dsshop.test/login"
            );
        }
    }
}
