export const slug_to_text = slug=>{
    return slug.split('_').map((part)=> {
        return part.charAt(0).toUpperCase() + part.slice(1);
    }).join(' ');
}

export const slug_to_code = slug=>{
   return (slug_to_text(slug).split(" ").map(value => {return value.charAt(0)})).join("");

}
