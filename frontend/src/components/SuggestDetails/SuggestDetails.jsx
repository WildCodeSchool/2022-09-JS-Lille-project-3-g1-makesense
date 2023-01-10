import { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";

export default function SuggestDetails() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=3").then(({ data }) => {
      setUser(data.results);
    });
  }, []);
  return (
    <section className="suggestdetail">
      <h2 className="titleSuggest">Title</h2>
      <div className="main">
        <article className="content">
          <div className="description">
            <h2 className="titleDesc">Description</h2>
            <p className="contentDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quidem nihil quo eveniet praesentium perspiciatis
              provident aliquid corrupti veniam voluptatum unde dolorem, amet
              modi minima ducimus officia vero sint quisquam!
            </p>
          </div>
          <div className="repercution">
            <h2 className="titleCon">Concequences</h2>
            <p className="contentRepercution">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate laudantium delectus, labore quam quod totam impedit odit
              vitae maiores tempore cumque eum perspiciatis itaque adipisci
              molestias iure voluptates ex voluptatum?
            </p>
          </div>
        </article>
        <article className="people">
          <div className="impacted">
            <h3 className="peopletitle">Impacted people</h3>
            <div className="avatar">
              {user.map((avatar) => {
                return (
                  <img
                    className="avatarpicture"
                    src={avatar.picture.medium}
                    alt={avatar.name.first}
                  />
                );
              })}
            </div>
          </div>
          <div className="expert">
            <h3 className="peopletitle">Expert people</h3>
            <div className="avatar">
              {user.map((avatar) => {
                return (
                  <img
                    className="avatarpicture"
                    src={avatar.picture.medium}
                    alt={avatar.name.first}
                  />
                );
              })}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
