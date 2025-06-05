export function isValidApiResponse<T>(res: any): res is { status: number; success: boolean; data: T } {
  return res?.status === 200 && res?.success === true;
}
