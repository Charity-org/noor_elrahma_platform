import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Search } from "lucide-react";
import { useCallback } from "react";

function SearchInput() {
  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
  }, []);
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-5 h-5 text-gray-500" />
      <PlaceholdersAndVanishInput
        placeholders={["Search...", "Find projects...", "Search by status..."]}
        onChange={(e) => console.log(e.target.value)}
        onSubmit={handleSearchSubmit}
        className="h-12 bg-[#F3EAD6] rounded-full"
      />
    </div>
  );
}

export default SearchInput;
