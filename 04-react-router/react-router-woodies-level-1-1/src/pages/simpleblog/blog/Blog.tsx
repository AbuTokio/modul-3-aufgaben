import Button from "../../../components/simpleblog/Button"
import { blogData } from "../../../data/simpleblog/data"

export default function Blog() {
  return (
    <section>
      {blogData.map((post) => (
        <article key={post.id}>
          <img className="w-[200px]" src={post.img_url} alt={post.title} />
          <div>
            <h3>{post.title}</h3>
            <p>{post.published_date}</p>
            <p>{post.description}</p>
            <p>by {post.author}</p>
            <Button to={`${post.id}`} text="Read more" />
          </div>
        </article>
      ))}
    </section>
  )
}
