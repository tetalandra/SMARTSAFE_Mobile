import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* ---------------- HERO CARD ---------------- */}
        <View style={styles.heroCard}>
          <Image
            source={require('../assets/images/lock.png')} // replace with your image
            style={styles.heroImage}
          />

          {/* Shield Overlay */}
          <View style={styles.shieldWrapper}>
            <Ionicons name="shield" size={120} color="#FF4D4D" />
          </View>

          {/* Active Monitor Badge */}
          <View style={styles.badge}>
            <View style={styles.dot} />
            <Text style={styles.badgeText}>Active Monitor</Text>
          </View>
        </View>

        {/* ---------------- TITLE ---------------- */}
        <Text style={styles.title}>
          Safety Without{'\n'}
          <Text style={styles.highlight}>Limits</Text>
        </Text>

        {/* ---------------- DESCRIPTION ---------------- */}
        <Text style={styles.description}>
          Advanced gas & fire prevention with automatic shutoff and inclusive
          alerts for hearing, vision, or mobility needs.
        </Text>

        {/* ---------------- FEATURES ---------------- */}
        <View style={styles.features}>
          <Feature
            icon="flame"
            label="AUTO SHUTOFF"
          />
          <Feature
            icon="location"
            label="AUTO ALERT"
          />
          <Feature
            icon="accessibility"
            label="INCLUSIVE"
          />
        </View>

        {/* ---------------- CTA ---------------- */}
        <Pressable style={styles.cta}>
          <Text style={styles.ctaText}>Get Started</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </Pressable>

        {/* ---------------- LOGIN ---------------- */}
        <Text style={styles.login}>
          Already protected? <Text style={styles.loginBold}>Log in here</Text>
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- FEATURE CARD ---------------- */
const Feature = ({ icon, label }) => (
  <View style={styles.featureCard}>
    <Ionicons name={icon} size={28} color="#E53935" />
    <Text style={styles.featureText}>{label}</Text>
  </View>
);
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    padding: 20,
    alignItems: 'center',
  },

  /* HERO */
  heroCard: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 30,
    backgroundColor: '#000',
  },

  heroImage: {
    width: '100%',
    height: '100%',
    opacity: 0.25,
  },

  shieldWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -60 }, { translateY: -60 }],
  },

  badge: {
    position: 'absolute',
    top: 14,
    right: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2ECC71',
    marginRight: 6,
  },

  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  /* TEXT */
  title: {
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
  },

  highlight: {
    color: '#E53935',
    textDecorationLine: 'underline',
  },

  description: {
    fontSize: 15,
    textAlign: 'center',
    color: '#555',
    marginBottom: 30,
    lineHeight: 22,
  },

  /* FEATURES */
  features: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
    
  },

  featureCard: {
    width: '30%',
    height: 90,
    borderRadius: 14,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  featureText: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    color: '#777',
  },

  /* CTA */
  cta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E53935',
    height: 60,
    width: '100%',
    borderRadius: 14,
    marginBottom: 20,
    gap: 10,
  },

  ctaText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  /* LOGIN */
  login: {
    fontSize: 14,
    color: '#777',
  },

  loginBold: {
    color: '#000',
    fontWeight: '700',
  },
});
