export default function getUrl(): string {
  if (import.meta.env.DEV == true) {
    return "http://localhost:8000/api"
  }
  return "http://localhost/api"
}