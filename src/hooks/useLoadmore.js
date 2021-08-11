import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../actions/index";

function useLoadmore() {
    const { items, total, query, isLoading, isError } = useSelector(
        (state) => state.movies
    );
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const handleScroll = useCallback(() => {
        const bottom =
            Math.ceil(window.innerHeight + window.scrollY) >=
            document.documentElement.scrollHeight;
        if (bottom) setPage((val) => val + 1);
    }, [setPage]);

    const loadMore = async (page) => {
        if (total > 5 && total > items.length) {
            await dispatch(fetchMovies(query, page, true));
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        if (page > 1) {
            loadMore(page);
        }
    }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setPage(1);
    }, [query]);

    return [items, total, isLoading, isError];
}

export default useLoadmore;
