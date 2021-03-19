
/** @jsxRuntime classic */
/** @jsx jsx */
import { Image, Box, Flex, jsx, Text } from 'theme-ui';
import { useState } from 'react'
import { Button } from './Button';
import { ViewDetails } from './ViewDetails';

export const Event = () => {
    const [style, setStyle] = useState({ display: 'none' })
    return (
        <Flex>
            <Box sx={{
                width: '400px',
                height: '398px',
                backgroundColor: 'dark3',
            }}>
                <Box
                    sx={{ position: 'relative' }}
                    onMouseEnter={e => {
                        setStyle({
                            display: 'inline-block'
                        })
                    }}
                    onMouseLeave={e => {
                        setStyle({ display: 'none' })
                    }}
                >
                    <Image
                        src='https://mk0javascriptfoyi7o2.kinstacdn.com/wp-content/uploads/2019/10/2-3.png'
                        variant='eventThumbnail'
                    />
                    <Box sx={{
                        position: 'absolute',
                        bottom: '6px', right: '6px'
                    }}
                        style={style}>
                        <ViewDetails />
                    </Box>
                </Box>
                <Flex sx={{
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        marginLeft: '17px'
                    }}>
                        <Image
                            src='https://scontent.flpb1-2.fna.fbcdn.net/v/t31.0-8/22861371_1507326192716347_8054347878307429882_o.png?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Ig-_X_vVz5wAX-3jYgB&_nc_ht=scontent.flpb1-2.fna&oh=c840b8cf8bcbfaf59e2e73fedc06ce5b&oe=606E94CE'
                            variant='avatar'
                        />
                    </Box>
                    <Text sx={{
                        marginLeft: '17px',
                        variant: 'Text.cardTitle'
                    }}>React Bootcamp 2021
                    </Text>
                    <Flex sx={{
                        flexDirection: 'column',
                        marginLeft: 'auto',
                        marginRight: '17px'
                    }}>
                        <Box sx={{
                            color: 'white',
                        }}>
                            <Text sx={{
                                fontSize: '10px',
                                fontWeight: 'bold'
                            }}>Jan</Text>
                            <Text sx={{
                                fontWeight: 'bold',
                                fontSize: '17px'
                            }}>24</Text>
                        </Box>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex sx={{
                        flexDirection: 'column',
                        marginLeft: '17px'
                    }}>
                        <Text sx={{
                            variant: 'Text.cardSubtitle'
                        }}>
                            Description
                        </Text>
                        <Text sx={{
                            variant: 'Text.cardDescription'
                        }}>
                            A simple activity description goes here
                        </Text>
                    </Flex>
                    <Flex sx={{
                        marginLeft: '40px',
                        marginTop: '10px'
                    }}>
                        <Button />
                    </Flex>
                </Flex>
                {/* <Flex sx={{
                    position: 'relative'
                }}>
                    <Flex sx={{
                        position: 'absolute',
                        top: '40px',
                        right: '40px',
                        borderRadius: '50%',
                        marginLeft: '20px',
                        width: '22px',
                        height: '22px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white'
                    }}>
                        <Flex sx={{
                            color: 'dark3'
                        }}>
                            <Link />
                        </Flex>
                    </Flex>
                </Flex> */}
            </Box>
        </Flex>
    )
}
