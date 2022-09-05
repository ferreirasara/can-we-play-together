import { Box, Chip } from "@mui/material";

type FiltersProps = {
  tags: string[]
  handleSelectCategory: (category: string, selected: boolean) => void
  handleCleanFilters: () => void
  selectedCategories: string[] | undefined
}
export default function Filters({ tags, handleSelectCategory, handleCleanFilters, selectedCategories }: FiltersProps) {

  return (
    <Box p={1} display="flex" gap={1} flexWrap="wrap">
      {tags?.map((tag, index) =>
        <Chip
          label={tag}
          key={index}
          clickable
          color="default"
          variant={selectedCategories?.includes(tag) ? "filled" : "outlined"}
          onClick={() => handleSelectCategory(tag, !!selectedCategories?.includes(tag))}
        />
      )}
      {selectedCategories?.length
        ? <Chip
          label="Remove filters"
          color="error"
          variant="outlined"
          onClick={() => handleCleanFilters()}
          clickable
        />
        : null
      }
    </Box>
  )
}