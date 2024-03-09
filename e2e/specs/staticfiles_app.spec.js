/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2024)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const STATICFILE_URL = 'http://localhost:7860/app/static/streamlit-mark-color.png';

describe("static files", () => {
  beforeEach(() => {
    cy.intercept(
      STATICFILE_URL,

      // Disable browser cache, so cy.intercept works on every rerun of the
      // test. Useful for debugging.
      { middleware: true },
      (req) => {
        req.on('before:response', (res) => {
          // force all API responses to not be cached
          res.headers['cache-control'] = 'no-store'
        })
      },
    ).as('staticFileLoad');

    cy.loadApp("http://localhost:3000/");
  });

  it("loads streamlit_app with static image", () => {
    cy.wait("@staticFileLoad").get("img").first().matchThemedSnapshots(
      "static_streamlit_logo", {},
      () => cy.get("img").first()
    );
  });

  it("serves existing static file correctly", () => {
    cy.request(STATICFILE_URL).its('status').should('eq', 200);
  });

  it("does not serve non-existing static file, return 404", () => {
    cy.request(
      {
        url: 'http://localhost:7860/app/static/notexisting.jpeg',
        failOnStatusCode: false
      }).its('status').should('equal', 404)
  });
});
