import { createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "@api/auth";

export const fetchRegistr = createAsyncThunk(
  "auth/fetchRegistr",
  auth.doRegistr
);
