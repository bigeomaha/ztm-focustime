import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../utils/theme';
import { CountDownTimer } from '../components/CountdownTimer';
import { RoundedButton } from '../components/RoundedButton';

export const Timer = ({ currentSubject, onTimerEnd }) => {
    const [isStarted, setIsStarted] = React.useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
               <Text style={styles.countdownText}> Focusing On:</Text>
               <Text style={styles.countdownLabel}>{currentSubject}.</Text>
                <CountDownTimer 
                    isPaused={!isStarted} 
                    onProgress={()=>{}}
                    onEnd={()=>{onTimerEnd}} />
            </View>
            <View style={styles.buttonWrapper}>
                {!isStarted ? (
                    <RoundedButton style={styles.actionButtons} size={Theme.sizes.xxxxl}
                        title="Start"
                        onPressHandler={()=>setIsStarted(true)} />
                    )
                    : (                    
                    <RoundedButton style={styles.actionButtons} size={Theme.sizes.xxxxl}
                        title="Pause"
                        onPressHandler={()=>setIsStarted(false)} />               
                    )
                }
                <RoundedButton style={styles.actionButtons} size={Theme.sizes.xxxxl}
                     title="Clear"
                     onPressHandler={()=>{}} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: Theme.sizes.xxxl,
        color: Theme.colors.white,
    },
    countdown: {
        flex: 0.5,
        paddingTop: Theme.spacing.lg,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: Theme.spacing.lg,
    },
    buttonWrapper: {
        flex: 0.3,
        padding: Theme.spacing.md,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionButtons: {
        margin: Theme.spacing.md,
    },
    countdownText: {
        fontSize: Theme.sizes.md,        
        color: Theme.colors.white,
        padding: 0
    },
    countdownLabel: {
        fontSize: Theme.sizes.xl,
        color: Theme.colors.white,
        padding: Theme.spacing.xsm,
        fontWeight: 'bold',
        paddingBottom: Theme.spacing.lg,
    }
});