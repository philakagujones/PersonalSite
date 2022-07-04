import { Collapse, Text } from "@nextui-org/react";

function Tabs() {
  return (
    <Collapse.Group accordion={false}>
      <Collapse 
        title={<Text css={{
            color: "$violet400",
        }}>Ethos Lab</Text>}
        subtitle="Game Development | Summer 2022"
        >
        <Text
            css={{
                color: "$violet400",
            }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Collapse>
      <Collapse 
        title={<Text css={{
            color: "$violet400",
        }}>Solid State</Text>} 
        subtitle="Web Development | 2021"
        >
        <Text
                css={{
                    color: "$violet400",
                }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Collapse>
    </Collapse.Group>
  );
}

export default Tabs;