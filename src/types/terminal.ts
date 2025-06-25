import React from "react";

export interface Command {
  input: string;
  output: React.ReactNode;
}

export interface DirectoryChangeResult {
  message: string;
  isError: boolean;
}
