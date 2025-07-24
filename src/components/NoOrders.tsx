type Props={
    title:string,
    subtitle: string
}

export default function NoOrder({title,subtitle}:Props){
    return(
        <div className="flex  flex-col gap-2 px-12">
          <p className="text-[#101419] text-lg font-bold   ">
            {title}
          </p>
          <p className="text-[#101419] text-sm font-normal ">
            {subtitle}
          </p>
        </div>
    )
}