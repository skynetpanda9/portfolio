import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
      <div>
        <Hero title={props.title} />

        <Content>
          <p>
            Hello, I'm Akash. I'm a full stack developer with experience in
            React, ReactJS, Express JS, Node JS, MongoDB and MySql.
          </p>

          <p>
            I'm also expert in Designing & Prototyping tools like Figma, Framer
            & Adobe XD.
          </p>

          <p>
            Along with designing tools, I'm proficient in Content Creation tools
            such as Final Cut Pro & Adobe After Effects.
          </p>

          <p>
            I'm constantly learning new things. Currently getting more
            experience in ReactNative, TypeScript, C++ & C#.
          </p>

          <p>
            My latest project, Chalkstik, is a website for school & college ERP
            modules. You can check it out{" "}
            <a
              href="https://chalkstik.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            , or on the homepage. It is built with HTML, CSS & JS. However, I
            will be rebuilding it using React in the coming months. The current erp
            website <a href="https://erp.chalkstik.net/erp" target="_blank" rel="noreferrer">here.</a>
          </p>

          <p>
            When I'm not learning something new, chances are I'm doing Photography & Videography stuff. You can find those on homepage.
          </p>
        </Content>
      </div>
    );

}

export default AboutPage;