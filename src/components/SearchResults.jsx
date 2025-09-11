export default function SearchResults({results}){
    return (
        <div className="mt-5 grid gap-4 w-full max-w-2xl">

            {
                results.map( (user) => (
                    <div key={user.id}
                    className=" bg-white shadow flex items-center p-4 rounded-lg gap-4 hover:shadow-md transition">
                        <img src={user.avatar_url} alt="user profile" className="w-16 h-16 rounded-full"/>
                        <div className="flex-1">

                            <h2 className="font-semibold text-lg">{user.login}</h2>
                            <a href={user.html_url} className="font-sans text-md text-gray-600 hover:text-blue-600 "
                            target="_blank" > View Profile </a>

                        </div>
                    </div>
                 ) )
            }

        </div>
    )
}