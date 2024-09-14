import fs2 from "fs";
import { readFile } from "./mock_module";

jest.mock("fs");
const mockFs = jest.mocked(fs2);
mockFs.readFileSync.mockImplementation(() => {
    return "abc";
})

test("readFile",() => {
    const result = readFile("path");
    expect(result).toBe("This is abc");
})