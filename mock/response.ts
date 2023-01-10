export default function response(data: any, status: number, code: number) {
  return {
    data,
    status,
    code
  };
}
