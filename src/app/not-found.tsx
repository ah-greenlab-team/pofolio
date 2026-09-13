import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Không tìm thấy trang
      </h1>
      <p className="mt-3 max-w-md text-fg-muted">
        Trang bạn tìm không tồn tại hoặc đã được chuyển đi nơi khác.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
