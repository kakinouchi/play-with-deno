import {
  RouteHandler,
  RouteHandlerResult,
} from "https://deno.land/x/pogo@v0.5.1/lib/types.ts";
import Request from "https://deno.land/x/pogo@v0.5.1/lib/request.ts";
import Toolkit from "https://deno.land/x/pogo@v0.5.1/lib/toolkit.ts";
import { Status as status } from "https://deno.land/std/http/http_status.ts";

export class SampleController {
  //   constructor() {
  //   }

  public run: RouteHandler = (
    request: Request,
    h: Toolkit,
  ): RouteHandlerResult => {
    const queryParamTest: string | null = request.url.searchParams.get(
      "queryParamTest",
    );

    if (queryParamTest === "err") {
      return h.response(new Error("query param error from controller")).code(
        status.BadRequest,
      );
    }

    const pathParamTest: string | undefined =
      request.route.params.pathParamTest;

    if (pathParamTest === "e,r,r") {
      return h.response(new Error("path param error from controller")).code(
        status.BadRequest,
      );
    }

    return h.response("hello, from controller").code(status.OK);
  };
}
