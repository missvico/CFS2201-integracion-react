function SearchInput({ handleChange, handleSubmit }) {
    return (
        <form class="d-flex" role="search" onSubmit={handleSubmit}>
            <input
                name="query"
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleChange}
            />
            <button class="btn btn-outline-success" type="submit">
                Search
            </button>
        </form>
    );
}
export default SearchInput