import { Collapse, Text } from "@nextui-org/react";

function Tabs() {
  return (
    <Collapse.Group accordion={false}>
      <Collapse 
        title={<Text css={{
            color: "$violet400",
        }}>Ethos Lab</Text>}
        subtitle="Game & Web Development | Summer 2022"
        >
        <Text
            css={{
                color: "$violet400",
            }}
        >
          <em>Game Developer</em> <br />
          Worked to assist in the creation of their new up-and-coming student led indie game studio. 
          Developed and tested cross-platform 2D games in order to lead participants in lessons surrounding Unity and C#. Collaborated with various teams to create well designed levels for a large-scale game.
          Attended several exclusive workshops held by Electronic Arts in order to learn industry standard game development practices. <br />
          <br /> <em>Front End Developer</em> <br />
          Manages website.
        </Text>
      </Collapse>
      <Collapse 
        title={<Text css={{
            color: "$violet400",
        }}>Solid State</Text>} 
        subtitle="Full Stack Web Development | 2021"
        >
        <Text
                css={{
                    color: "$violet400",
                }}
        >
          Designed, developed and managed company website.
        </Text>
      </Collapse>
      <Collapse 
        title={<Text css={{
            color: "$violet400",
        }}>Studio Pluto</Text>} 
        subtitle="Creative Agency | 2020 - Present"
        >
        <Text
                css={{
                    color: "$violet400",
                }}
        >
          We are a creative agency that loves creating pixel-perfect, minimal designs that are impactful and have purpose. From immersive websites to stunning apps, or wonderful crafted visual graphics in the form of promotional videos or a logo, we are equipped with a vast set of skills and love to create.
        </Text>
      </Collapse>
    </Collapse.Group>
  );
}

export default Tabs;