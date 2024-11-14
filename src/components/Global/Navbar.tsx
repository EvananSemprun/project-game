import { motion } from 'framer-motion';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { IconAt, IconUser, IconShoppingCart, IconBrandWhatsapp } from '@tabler/icons-react';
import { ActionIcon, Card, useMantineColorScheme, Text, Group, TextInput, Title, HoverCard, useMantineTheme, Burger, Drawer } from '@mantine/core';

function Navbar() {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    const theme = useMantineTheme();
    const isMobile = useMediaQuery('(min-width: 1000px)');
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Card shadow="sm" p="lg">
                {!isMobile && (
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
                            <IconUser color='#FBC403' size={34} />
                        </ActionIcon>
                        <ActionIcon color={dark ? 'yellow' : 'dark'} radius="xl">
                            <IconShoppingCart color='#FBC403' size={34} />
                        </ActionIcon>
                        <ActionIcon color={dark ? 'yellow' : 'dark'} radius="xl">
                            <IconBrandWhatsapp color='#FBC403' size={34} />
                        </ActionIcon>
                        {/* 
                        <ActionIcon
                            color={dark ? 'yellow' : 'dark'}
                            onClick={() => toggleColorScheme()}
                            title="Toggle color scheme"
                        >
                            {dark ? <IconSun size={34} /> : <IconMoonStars size={34} />}
                        </ActionIcon> 
                        */}
                    </Group>
                </Group>
            </Card>

            {isMobile && (
                <Group mt={15} position="apart" mr="15%" ml="15%" >
                    <Group spacing="xl" position="apart">
                        {['Option 1', 'Option 2', 'Option 3'].map((label, index) => (
                            <HoverCard width={320} radius="lg" shadow="md" key={index} openDelay={250}>
                                <HoverCard.Target>
                                    <motion.div
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1, scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <Text
                                            mr={15}
                                            fw={700}
                                            sx={{
                                                color: 'white',
                                            }}
                                            component={motion.div}
                                            whileHover={{ color: '#FBC403' }}
                                            transition={{ duration: 0 }}
                                        >
                                            {label}
                                        </Text>
                                    </motion.div>
                                </HoverCard.Target>
                                <HoverCard.Dropdown >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Text size="sm">Description for {label}</Text>
                                    </motion.div>
                                </HoverCard.Dropdown>
                            </HoverCard>
                        ))}
                    </Group>
                    <TextInput
                        placeholder="Buscar...."
                        radius="lg"
                        w="40%"
                        size="lg"

                        icon={<IconAt size={14} />}
                    />
                </Group>
            )}
        </>
    );
}

export default Navbar;