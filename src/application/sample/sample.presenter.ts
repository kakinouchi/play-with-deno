export class SamplePresenter {
  private constructor() {
    throw new Error("Do not instantiation this class");
  }

  public static validateIdList = (
    idListStr: string | undefined,
  ): number[] | Error => {
    if (idListStr === undefined) {
      return new Error("Invalid Format; id params is undefined");
    }

    const idList: number[] = idListStr.split(",").map((idStr: string) =>
      Number(idStr)
    );

    if (idList.some((id) => isNaN(id))) {
      return new Error("Invalid Format; id params included NaN");
    }

    const includeNonPositiveInteger: boolean = idList.some((id: number) =>
      id < 0 || Math.floor(id) !== id
    );
    if (includeNonPositiveInteger) {
      return new Error(
        "Invalid Format; id params included non positive-integer",
      );
    }

    return idList;
  };
}
