const gitHubLink = "https://github.com/superxp360";
const getFullYear = new Date(). getFullYear();

export default function Footer() {

    return(
        <footer>
            <p>&copy; {getFullYear}</p>
            <p><a href={gitHubLink} target="_blank" rel="nonreferrer">GitHub</a></p>
        </footer>
    )
}