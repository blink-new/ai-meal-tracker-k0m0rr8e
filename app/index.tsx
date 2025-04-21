
import { YStack, Text, View, Button, Theme, XStack, Image } from 'tamagui';
import { TouchableOpacity } from 'react-native';
import { Camera } from 'lucide-react-native';

export default function Home() {
  return (
    <Theme name="light">
      <View
        flex={1}
        backgroundColor="#f6fdf7"
        padding="$4"
        justifyContent="flex-start"
        alignItems="center"
      >
        <YStack
          width="100%"
          maxWidth={420}
          marginTop="$6"
          alignItems="center"
          space="$4"
        >
          <Text
            fontSize={28}
            fontWeight="800"
            color="#1a3d2f"
            letterSpacing={0.5}
            marginBottom="$2"
          >
            Meal Log
          </Text>
          <YStack
            width="100%"
            alignItems="center"
            justifyContent="center"
            backgroundColor="#e8f5e9"
            borderRadius={24}
            paddingVertical="$8"
            paddingHorizontal="$4"
            shadowColor="#b2dfdb"
            shadowOpacity={0.15}
            shadowRadius={12}
            shadowOffset={{ width: 0, height: 4 }}
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
              }}
              width={120}
              height={120}
              borderRadius={60}
              marginBottom="$4"
              style={{ opacity: 0.7 }}
            />
            <Text
              color="#388e3c"
              fontSize={20}
              fontWeight="700"
              marginBottom="$2"
              textAlign="center"
            >
              No meals yet
            </Text>
            <Text
              color="#388e3c"
              fontSize={16}
              textAlign="center"
              opacity={0.7}
            >
              Start tracking your meals by adding your first one!
            </Text>
          </YStack>
        </YStack>
        {/* Floating Action Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={{
            position: 'absolute',
            bottom: 36,
            right: 32,
            backgroundColor: '#43a047',
            borderRadius: 32,
            width: 64,
            height: 64,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#388e3c',
            shadowOpacity: 0.25,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 4 },
            elevation: 6,
          }}
          onPress={() => {
            // Placeholder for Add Meal action
            alert('Add Meal (coming soon!)');
          }}
        >
          <Camera color="white" size={32} />
        </TouchableOpacity>
      </View>
    </Theme>
  );
}