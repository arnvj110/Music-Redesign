import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { getTrack, search } from "../api/api";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";

export default function Header() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const {theme, toggleTheme} = useTheme();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.trim()) {
        fetchResults(query);
      } else {
        setResults([]);
        setShowDropdown(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const fetchResults = async (searchTerm) => {
    setLoading(true);
    setShowDropdown(true);
    try {
      const response = await search(searchTerm);
      
      setResults(response || []);
    } catch (err) {
      console.error("API error:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="p-6 bg-white/10 backdrop-blur-xl border-b border-white/10 relative z-[100]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Good evening</h1>
          <p className="text-gray-300">Ready to discover new music?</p>
        </div>

        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for songs, artists..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 w-full text-white"
          />

          {/* Dropdown */}
          {showDropdown && (
            <div className="absolute top-12 left-0 w-full max-w-md bg-black border border-white/20 rounded-xl mt-2 shadow-lg max-h-80 overflow-y-auto dropdown-scrollbar z-[120]">
              {loading ? (
                <div className="p-4 text-gray-400">Loading...</div>
              ) : results.length > 0 ? (
                results.map((item, idx) => (
                    <Link to={`/album/${item.album.id}`} key={idx} onClick={() => { setShowDropdown(false); setQuery(''); }}>
                  <div
                    key={idx}
                    className="p-4 hover:bg-white/10 cursor-pointer transition duration-150 flex items-center gap-4"
                  >
                    <img
                      src={item.album.images[0]?.url}
                      alt={item.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="min-w-0">
                      <p className="text-white font-medium truncate">{item.name}</p>
                      <p className="text-sm text-gray-400 truncate">
                        {item.artists.map((artist) => artist.name).join(", ")}
                      </p>
                    </div>
                  </div>
                  </Link>
                ))
              ) : (
                <div className="p-4 text-gray-400">No results found.</div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
