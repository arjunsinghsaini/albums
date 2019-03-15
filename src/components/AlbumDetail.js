import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (<View>
        <Card>
            <CardSection>
                <Image
                    style={{ width: 66, height: 58 }}
                    source={{ uri: props.album.image}}
                />
                <View style={{ margin:10 }}>
                    <Text>{props.album.title}
                    </Text>
                    <Text style={{ marginTop:10 }} >{props.album.artist}
                    </Text>
                </View>
            </CardSection>
        </Card>
    </View>);
}

export default AlbumDetail; 