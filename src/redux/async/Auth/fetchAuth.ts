import { createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "@api/auth";

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  auth.doAuthorization,
);
