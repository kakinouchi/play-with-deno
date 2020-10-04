import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.73.0/testing/asserts.ts";
import { SamplePresenter } from "../../../src/application/sample/sample.presenter.ts";

Deno.test("normal scenario Test", () => {
  const testData = "1,2,3";
  const validated = SamplePresenter.validateIdList(testData);
  assertEquals(validated, [1, 2, 3]);
});

Deno.test("normal scenario Test", () => {
  const testData = undefined;
  const validated = SamplePresenter.validateIdList(testData);
  assert(validated instanceof Error === true);
});
