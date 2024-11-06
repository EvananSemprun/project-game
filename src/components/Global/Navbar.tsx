import { IconSun, IconMoonStars, IconAt, IconBrandInstagram, IconBrandFacebookFilled, IconBrandWhatsapp } from '@tabler/icons-react';
import { ActionIcon, Card, useMantineColorScheme, Text, Group, TextInput, Title, HoverCard, Stack, useMantineTheme, Burger, Drawer } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';

function Navbar() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    const isMobile = useMediaQuery('(min-width: 1000px)');

    return (
        <>
            <Card shadow="sm" p="lg">
                {isMobile && (
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        title={opened ? 'Close navigation' : 'Open navigation'}
                    />
                )}

                <Drawer
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Navigation"
                    padding="xl"
                    size="lg"  
                    position="left" 
                    overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                    overlayOpacity={0.55}
                    overlayBlur={3}
                >
                    <div>
                        <p>Content of the Drawer</p>
                    </div>
                </Drawer>
                <Group position={isMobile ? "apart" : "center"} style={{ flexDirection: isMobile ? "row" : "column", width: "100%" }}>
                    <Title order={1} align={isMobile ? "left" : "center"}>This is h1 title</Title>

                    <Group spacing="lg" position={isMobile ? "apart" : "center"}>
                        <ActionIcon color={dark ? 'yellow' : 'dark'} radius="xl">
                            <IconBrandInstagram size={34} />
                        </ActionIcon>
                        <ActionIcon color={dark ? 'yellow' : 'dark'} radius="xl">
                            <IconBrandFacebookFilled size={34} />
                        </ActionIcon>
                        <ActionIcon color={dark ? 'yellow' : 'dark'} radius="xl">
                            <IconBrandWhatsapp size={34} />
                        </ActionIcon>
                        <ActionIcon
                            color={dark ? 'yellow' : 'dark'}
                            onClick={() => toggleColorScheme()}
                            title="Toggle color scheme"
                        >
                            {dark ? <IconSun size={34} /> : <IconMoonStars size={34} />}
                        </ActionIcon>
                    </Group>
                </Group>
            </Card>
            
            {isMobile && (
                <Group mt={15} position="apart" mr={45} ml={45}>
                    <Group spacing="xl">
                        <HoverCard width={320} shadow="md">
                            <HoverCard.Target>
                                <Text fw={700}>Bold</Text>
                            </HoverCard.Target>
                            <HoverCard.Dropdown>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <HoverCard width={320} shadow="md">
                            <HoverCard.Target>
                                <Text fw={700}>Bold</Text>
                            </HoverCard.Target>
                            <HoverCard.Dropdown>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <HoverCard width={320} shadow="md">
                            <HoverCard.Target>
                                <Text fw={700}>Bold</Text>
                            </HoverCard.Target>
                            <HoverCard.Dropdown>
                            </HoverCard.Dropdown>
                        </HoverCard>
                    </Group>
                    <TextInput
                        placeholder="Buscar...."
                        radius="lg"
                        w="45%"
                        size="lg"
                        icon={<IconAt size={14} />}
                    />
                </Group>
            )}
        </>
    );
}

export default Navbar;
