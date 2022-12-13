import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return(
        <section className="error_page">
        <h1>Sorry!</h1>
        <h2>Page Not Found</h2>
        <Link to='/'>Back to Home</Link>
        </section>
    )
}