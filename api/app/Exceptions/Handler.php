<?php

namespace App\Exceptions;

//use App\Http\Middleware\QdAuthenticationException;
use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
//use Illuminate\Support\Facades\Redirect;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param \Throwable $exception
     * @return void
     * @throws Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param \Illuminate\Http\Request $request
     * @param Throwable $exception
     * @return \Illuminate\Http\Response
     * @throws Throwable
     */
    public function render($request, Throwable $exception)
    {
        if ($exception instanceof AuthenticationException) {
            return parent::render($request, $exception);
        }
//        if ($exception instanceof QdAuthenticationException && $request->path()=="oauth/authorize") {
//            return Redirect::to('http://172.20.67.194:3002/pass/login');
//        }

        $error = $this->convertExceptionToResponse($exception);
        $response['status_code'] = $error->getStatusCode();
        $response['code'] = $exception->getCode();
        $response['message'] = empty($exception->getMessage()) ? 'something error' : $exception->getMessage();
        if(config('app.debug')) {
            if($error->getStatusCode() >= 500) {
                if(config('app.debug')) {
                    $response['trace'] = $exception->getTraceAsString();

                }
            }
        }
        $response['result'] = 'error';
        return response()->json($response, $error->getStatusCode());
    }
}
