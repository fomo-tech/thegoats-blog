import React from 'react'
import { Controller } from 'react-hook-form'

interface Tag {
    id: string
    name: string
}

interface TagSelectorProps {
    control: any
    name: string
    tagOptions: Tag[]
    maxSelectable?: number
}

const TagSelector: React.FC<TagSelectorProps> = ({ control, name, tagOptions, maxSelectable = 10 }) => {
    return (
        <div>
            <label className="text-base font-medium text-gray-700 mb-2 block">Tags</label>
            <Controller
                control={control}
                name={name}
                defaultValue={[]}
                render={({ field }) => (
                    <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-2">
                        {tagOptions.map((tag) => {
                            const isSelected = field.value.includes(tag.id)

                            const toggleTag = () => {
                                if (isSelected) {
                                    field.onChange(field.value.filter((id: string) => id !== tag.id))
                                } else {
                                    if (field.value.length >= maxSelectable) return // limit selection
                                    field.onChange([...field.value, tag.id])
                                }
                            }

                            return (
                                <button
                                    key={tag.id}
                                    type="button"
                                    onClick={toggleTag}
                                    className={`group inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border shadow-sm transition 
                    ${isSelected
                                            ? 'bg-blue-600  border-blue-500 hover:bg-blue-700'
                                            : 'bg-gray-100 text-dark-500 border-gray-500 hover:bg-gray-200'}`}
                                >
                                    {tag.name}
                                    {isSelected && (
                                        <span className="ml-2 text-dark group-hover:text-gray-100 text-xs">✕</span>
                                    )}
                                </button>
                            )
                        })}
                    </div>
                )}
            />
        </div>
    )
}

export default TagSelector
