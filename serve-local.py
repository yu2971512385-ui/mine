#!/usr/bin/env python3

from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit


ROOT = Path(__file__).resolve().parent
HOST = "0.0.0.0"
PORT = 3000
PREFIX = "/mine"


class MineHandler(SimpleHTTPRequestHandler):
    def _prepare_path(self) -> bool:
        parsed = urlsplit(self.path)

        if parsed.path in ("", "/", PREFIX):
            self.send_response(308)
            self.send_header("Location", f"{PREFIX}/")
            self.end_headers()
            return False

        if not parsed.path.startswith(f"{PREFIX}/"):
            self.send_error(404)
            return False

        local_path = parsed.path[len(PREFIX) :] or "/"
        self.path = urlunsplit(("", "", local_path, parsed.query, parsed.fragment))
        return True

    def do_GET(self) -> None:
        if self._prepare_path():
            super().do_GET()

    def do_HEAD(self) -> None:
        if self._prepare_path():
            super().do_HEAD()


def main() -> None:
    handler = partial(MineHandler, directory=str(ROOT))
    server = ThreadingHTTPServer((HOST, PORT), handler)
    print(f"Serving {ROOT} at http://localhost:{PORT}{PREFIX}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
