import "./App.css";
import CardProfile from "./components/CardProfile";
import ProfileSection from "./components/ProfileSection";
import Skill from "./components/Skill";
import LinkButton from "./components/LinkButton";

import py from "./assets/img/icons/python.png";
import js from "./assets/img/icons/js.png";
import node from "./assets/img/icons/node.png";
import react from "./assets/img/icons/react.png";
import next from "./assets/img/icons/next.png";
import php from "./assets/img/icons/php.png";
import laravel from "./assets/img/icons/laravel.png";
import html from "./assets/img/icons/html.png";
import css from "./assets/img/icons/css.png";
import mongoDB from "./assets/img/icons/mongoDB.png";
import mysql from "./assets/img/icons/mysql.png";
import ts from "./assets/img/icons/ts.png";
import c from "./assets/img/icons/c.png";
import cPlus from "./assets/img/icons/c++.png";
import cSharp from "./assets/img/icons/csharp.png";

export default function App(){
  return(
    <div className="app">

      <CardProfile 
      img="./src/assets/img/avatars/pedro.jpg"
      name="Pedro Magno"
      bio="Desenvolvedor FullStack"
      phone="(21)99174-6678"
      email="contato@pedromagno.com.br" >
        <ProfileSection>
          <Skill image={js} alt="JavaScript"/>
          <Skill image={ts} alt="TypeScript"/>
          <Skill image={react} alt="React"/>
          <Skill image={next} alt="NextJS"/>
          <Skill image={node} alt="NodeJS"/>
          <Skill image={c} alt="Linguagem C"/>
          <Skill image={cPlus} alt="C++"/>
          <Skill image={cSharp} alt="C#"/>
          <Skill image={mysql} alt="MySql"/>
          <Skill image={mongoDB} alt="MongoDB"/>
        </ProfileSection>
        <ProfileSection>
        <LinkButton link="https://github.com/PedroMagno11" nameBtn="GitHub"/>
        <LinkButton link="https://www.linkedin.com/in/pedro-magno-017a64253/" nameBtn="Linkedin"/>
        <LinkButton link="https://pedromagno.com.br/" nameBtn="Meu Site"/>
        </ProfileSection>
      </CardProfile>

      <CardProfile 
      img="./src/assets/img/avatars/jenifer.jpg"
      name="Jenifer Alberti"
      bio="Analista de Dados"
      phone="(11)95096-2678"
      email="jenialberti@gmail.com"
      >
        <ProfileSection>
          <Skill image={html} alt="HTML"/>
          <Skill image={css} alt="CSS"/>
          <Skill image={js} alt="JavaScript"/>
          <Skill image={c} alt="Liguagem C"/>
          <Skill image={cPlus} alt="C++"/>
          <Skill image={py} alt="Python"/>
        </ProfileSection>
        <ProfileSection>
          <LinkButton link="https://www.linkedin.com/in/jenifer-alberti/" nameBtn="Linkedin"/>
        </ProfileSection>
      </CardProfile>
    </div>
  )
}