import { test} from "@playwright/test";
const lodash = require("lodash");
const names = require("../names.json");

test.beforeEach(async ({ page }, testInfo) => {
  // Extend timeout for all tests running this hook by 30 seconds.
  testInfo.setTimeout(testInfo.timeout + 30000000);
});


test("has title", async ({ page }) => {
  for (let ab = 0; ab < 110; ab++) {
    let gender = lodash.sample(["Male", "Male",  "Male", "Female"]);
    let name = lodash.sample(names[gender]) + "+" + lodash.sample(names.last);
    console.log(name);
    let ageGroup = lodash.sample([
      "18+-+21",
      "22+-25",
      "26+-+29",
      "29+and+above",
    ]);
    let occ = lodash.sample([
      "Student",
      "Employed",
      "Self-employed",
      "Unemployed",
      "Retired",
    ]); // [Student, Employed, Self-employed, Unemployed, Retired]
    let area_url = "";
    for (let xx = 0; xx < lodash.sample([1, 2, 3, 4, 5]); xx++) {
      let areas = lodash.sample([
        "Work-related+tasks",
        "Home+management",
        "Personal+organization",
        "Health+and+fitness",
        "Entertainment",
        "Education",
        "Others",
      ]);
      area_url += `&entry.1835700466=${areas}`;
    }

    let a = lodash.sample([1, 2, 3, 4, 5, 6, 7]);
    let b = lodash.sample([1, 2, 3, 4, 5, 6, 7]);
    let c = lodash.sample([1, 2, 3, 4, 5, 6, 7]);
    let d = lodash.sample([1, 2, 3, 4, 5, 6, 7]);
    let e = lodash.sample([1, 2, 3, 4, 5, 6, 7]);
    let f = lodash.sample([1, 2, 3, 4, 5, 6, 7]);
    let g = lodash.sample([1, 2, 3, 4, 5, 6, 7]);
    let h = lodash.sample([1, 2, 3, 4, 5, 6, 7]);
    let i = lodash.sample([1, 2, 3, 4, 5, 6, 7]);
    let j = lodash.sample([1, 2, 3, 4, 5, 6, 7]);
    let k = lodash.sample([1, 2, 3, 4, 5, 6, 7]);
    const url = `https://docs.google.com/forms/d/e/1FAIpQLSfbT2mqDplpzFdSSd3m1yXXuCtj0Wg3U2b7pbE_QMWaGu9mjQ/viewform?usp=pp_url&entry.1820472837=${name}&entry.1322746697=${gender}&entry.1511491027=${ageGroup}&entry.181753250=${occ}&entry.1937452742=${a}&entry.375255853=${b}${area_url}&entry.1428073778=${c}&entry.1225543426=${d}&entry.610000252=${e}&entry.1744132156=${f}&entry.548209858=${g}&entry.1510380587=${h}&entry.1275586022=${i}&entry.359380917=${j}&entry.221113291=${k}`;
    await page.goto(url);
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Submit" }).click();
    await page.waitForTimeout(100);
  }
});
