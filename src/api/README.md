<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Public APIs

> APIs publicly exposed via the Google Sheets extension.

All APIs in this directory will be made available to end users. A few notes:

1. All APIs should have unique names, as all APIs will be exposed in the same global namespace.
1. All APIs should have JSDoc documentation.
1. All JSDoc examples should reflect usage in a Google Sheet (e.g., as part of a cell formula). Accordingly, JSDoc examples will not be valid JavaScript. That is intentional, as we want to show usage appropriate for a spreadsheet.
1. If an API implementation needs any utilities, the **only** import should be the namespace package, which should expose the desired utility. We use a single namespace to avoid cluttering the shared global namespace which is used by the public APIs in this directory.
1. If an API implementation depends on variables in the parent scope, the variables should be prefixed with two underscores followed by the API name and any applicable suffix (e.g., `__STDLIB_FOO_DTYPES`). Any variables which are prefixed by underscores are considered private and are not publicly exposed in a Google Sheet. As API names should be unique, by prefixing with the API name, we can avoid variable name collisions in the shared global namespace.
