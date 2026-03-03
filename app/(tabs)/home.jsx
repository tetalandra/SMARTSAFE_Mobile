import { View, Text, StyleSheet, Image, Pressable, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { GlassCard } from '../../components/GlassCard';

const { width } = Dimensions.get('window');

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <View style={styles.headerLogoContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.headerLogoImage}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.brandLogo}>
              SMART<Text style={styles.redText}>SAFE</Text>
            </Text>
            <Text style={styles.welcomeText}>Welcome back, Alex</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.profileBtn}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150' }}
            style={styles.profileImage}
          />
          <View style={styles.onlineBadge} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

        {/* ---------------- STATUS DASHBOARD ---------------- */}
        <GlassCard style={styles.heroCard}>
          <View style={styles.heroContent}>
            <View style={styles.statusInfo}>
              <View style={styles.liveBadge}>
                <View style={styles.pulseDot} />
                <Text style={styles.liveText}>SYSTEM SECURE</Text>
              </View>
              <Text style={styles.heroTitle}>Everything is{"\n"}under control</Text>
              <Text style={styles.heroSub}>3 devices active • No alerts</Text>
            </View>
            <View style={styles.shieldIconContainer}>
              <Ionicons name="shield-checkmark" size={80} color="#EF233C" />
            </View>
          </View>
          <View style={styles.heroFooter}>
            <Text style={styles.footerText}>Last checked: 2 mins ago</Text>
            <TouchableOpacity style={styles.refreshBtn}>
              <Ionicons name="refresh" size={16} color="#8D99AE" />
            </TouchableOpacity>
          </View>
        </GlassCard>

        {/* ---------------- MAIN TITLE ---------------- */}
        <View style={styles.titleSection}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.mainLogoImage}
            resizeMode="contain"
          />
          <Text style={styles.mainBrandTitle}>
            SMART<Text style={styles.highlight}>SAFE</Text>
          </Text>
          <Text style={styles.description}>
            The next generation of home safety. Advanced monitoring
            with inclusive accessibility at its core.
          </Text>
        </View>

        {/* ---------------- FEATURES ---------------- */}
        <View style={styles.featuresGrid}>
          <FeatureCard
            icon="flame"
            title="Auto Shutoff"
            desc="Gas valve lock"
            color="#EF233C"
          />
          <FeatureCard
            icon="notifications"
            title="Multi-Alert"
            desc="Inclusive signals"
            color="#2ecc71"
          />
          <FeatureCard
            icon="flash"
            title="Quick Test"
            desc="Remote check"
            color="#F1C40F"
          />
          <FeatureCard
            icon="people"
            title="Contacts"
            desc="Rapid response"
            color="#3498DB"
          />
        </View>

        {/* ---------------- CTA ---------------- */}
        <TouchableOpacity
          style={styles.cta}
          onPress={() => router.push('/(auth)/register')}
          activeOpacity={0.9}
        >
          <Text style={styles.ctaText}>Get started</Text>
          <Ionicons name="chevron-forward" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => router.push('/(auth)/login')}
        >
          <Text style={styles.loginText}>
            Advanced user? <Text style={styles.loginBold}>Log in</Text>
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const FeatureCard = ({ icon, title, desc, color }) => (
  <GlassCard style={styles.fCard}>
    <View style={[styles.fIconContainer, { backgroundColor: `${color}15` }]}>
      <Ionicons name={icon} size={24} color={color} />
    </View>
    <Text style={styles.fTitle}>{title}</Text>
    <Text style={styles.fDesc}>{desc}</Text>
  </GlassCard>
);

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    zIndex: 10,
  },
  headerLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerLogoImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  brandLogo: {
    fontSize: 24,
    fontWeight: '900',
    color: '#2B2D42',
    letterSpacing: 4,
    marginBottom: 4,
  },
  redText: {
    color: '#EF233C',
  },
  welcomeText: {
    fontSize: 13,
    color: '#8D99AE',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  profileBtn: {
    position: 'relative',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#EF233C',
  },
  onlineBadge: {
    position: 'absolute',
    right: 2,
    bottom: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2ecc71',
    borderWidth: 2,
    borderColor: '#fff',
  },
  container: {
    padding: 24,
    paddingBottom: 140,
  },
  /* HERO */
  heroCard: {
    padding: 20,
    marginBottom: 30,
  },
  heroContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusInfo: {
    flex: 1,
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(46, 204, 113, 0.1)',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  pulseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2ecc71',
    marginRight: 6,
  },
  liveText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#2ecc71',
    letterSpacing: 1,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#2B2D42',
    lineHeight: 30,
  },
  heroSub: {
    fontSize: 14,
    color: '#8D99AE',
    marginTop: 6,
  },
  shieldIconContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
  },
  footerText: {
    fontSize: 12,
    color: '#8D99AE',
    fontWeight: '600',
  },
  /* TITLE SECTION */
  titleSection: {
    marginBottom: 30,
    alignItems: 'center',
  },
  mainLogoImage: {
    width: 80,
    height: 80,
    marginBottom: 15,
    borderRadius: 20,
  },
  mainBrandTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#2B2D42',
    letterSpacing: 4,
    lineHeight: 40,
    marginBottom: 12,
    textAlign: 'center',
  },
  highlight: {
    color: '#EF233C',
  },
  description: {
    fontSize: 16,
    color: '#8D99AE',
    lineHeight: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  /* FEATURES GRID */
  featuresGrid: {
    flexDirection: 'row',
    wrap: 'wrap',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  fCard: {
    width: (width - 64) / 2,
    padding: 16,
    marginBottom: 16,
  },
  fIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  fTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#2B2D42',
    marginBottom: 4,
  },
  fDesc: {
    fontSize: 12,
    color: '#8D99AE',
    fontWeight: '600',
  },
  /* CTA */
  cta: {
    backgroundColor: '#EF233C',
    height: 65,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    shadowColor: '#EF233C',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 8,
    marginBottom: 20,
  },
  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
  loginBtn: {
    alignItems: 'center',
  },
  loginText: {
    color: '#8D99AE',
    fontSize: 14,
  },
  loginBold: {
    color: '#EF233C',
    fontWeight: '800',
  },
});
