import { Link } from "@mui/material";
import { amplitudeEvent } from "../utils/utils";

export default function GithubLink() {
  return (
    <Link onClick={() => amplitudeEvent('Github link')} underline="none" target="_blank" rel="noopener" href="https://github.com/ferreirasara">
      Sara Ferreira
    </Link>
  )
}