import type { ChangeEvent } from "react"

interface Props {
  url: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const UploadInput = ({
  onChange, 
  url='',
  }: Props) => {

  

    return (
      <div className="mb-4">
        <p className="mb-1 text-xl">Upload Avatar</p>
        <label className="border-2 border-dashed px-4 py-7 border-Neutral-500 w-full 
        block bg-Neutral-700/50 hover:bg-Neutral-700 rounded-xl cursor-pointer">

          <div className="bg-Neutral-700 size-12.5 grid place-content-center rounded-xl border-2
            border-Neutral-500 mb-2 mx-auto overflow-hidden">
            <img src={url == '' ? '/assets/images/icon-upload.svg' : url } alt="icon upload" />
          </div>

          <input className="hidden" type="file" onChange={onChange} />

          <span className="text-center block text-gray-500 text-sm">Drag and drop or click to upload</span>
        </label>

        <div className="flex py-1 px-1 gap-2">
          <img src="/assets/images/icon-info.svg" alt="icon info" />
          <p className="text-xs">Upload your photo (JPG or PNG, max size: 5MB).</p>
        </div>
      </div>
    )
}

