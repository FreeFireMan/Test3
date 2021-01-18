export default function PostList (){


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(data=>data.json())
    },[])



    return (
        <div>

        </div>
    );
}