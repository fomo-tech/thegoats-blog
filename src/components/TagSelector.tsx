import React from "react";
import { Controller } from "react-hook-form";

interface Tag {
  id: string;
  name: string;
}

interface TagSelectorProps {
  control: any;
  name: string;
  tagOptions: Tag[];
  maxSelectable?: number;
}

const TagSelector: React.FC<TagSelectorProps> = ({
  control,
  name,
  tagOptions,
  maxSelectable = 10,
}) => {
  return (
    <div>
      <label className="text-[14px] font-medium text-[#333] mb-2 block">
        Tags
      </label>
      <Controller
        control={control}
        name={name}
        defaultValue={[]}
        render={({ field }) => (
          <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-2">
            {tagOptions.map((tag) => {
              const isSelected = field.value.includes(tag.id);

              const toggleTag = () => {
                if (isSelected) {
                  field.onChange(
                    field.value.filter((id: string) => id !== tag.id)
                  );
                } else {
                  if (field.value.length >= maxSelectable) return;
                  field.onChange([...field.value, tag.id]);
                }
              };

              return (
                <button
                  key={tag.id}
                  type="button"
                  onClick={toggleTag}
                  className={`inline-flex items-center px-4 py-1.5 rounded-full text-[13px] font-medium border transition shadow-sm
                ${
                  isSelected
                    ? "bg-[#2563eb] border-[#2563eb] text-white hover:bg-[#1d4ed8]"
                    : "bg-[#f3f4f6] text-[#374151] border-[#d1d5db] hover:bg-[#e5e7eb]"
                }`}
                >
                  {tag.name}
                  {isSelected && (
                    <span className="ml-2 text-white text-xs opacity-80 group-hover:opacity-100">
                      ✕
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      />
    </div>
  );
};

export default TagSelector;
