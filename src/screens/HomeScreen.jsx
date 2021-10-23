import React, { useEffect } from "react";
import { Text, SafeAreaView, View } from "react-native";
import Button from "../components/Button";
import { styles, theme } from "../core/theme";

const phoRecipe = [
  {
    title: "Nguyên liệu",
    notice: "(3-4 bát phở)",
    steps: [
      "0.5kg đuôi bò.",
      "0.5kg sườn bò.",
      "0.5kg bắp bò (hoặc thay bằng thịt nạm, gầu tùy thích) thịt bò tái (tùy thích).",
      "1/4 củ hành tây to.",
      "1 củ gừng (to khoảng gấp rưỡi ngón tay cái).",
      "5-6 củ hành khô (hành hương, có thể thay bằng hành tím).",
      "1 thìa café hạt mùi già (không bắt buộc).",
      "5-6 rễ cây mùi.",
      "1 thảo quả.",
      "2 hoa hồi.",
      "1 thanh quế nhỏ.",
      "2 lóng mía (mỗi lóng dài khoảng 10cm).",
      "Bột nêm hoặc muối.",
      "Bánh phở, hành, mùi thái nhỏ ,tương ớt, chanh.",
    ],
  },
  {
    title: "Các bước",
    steps: [
      "Đuôi và sườn bò chặt miếng nhỏ.",
      "Thịt bắp bò để nguyên miếng.",
      "Pha nước muối loãng (mặn vừa như nấu canh là được), ngâm đuôi bò, sườn bò và thịt bò trong khoảng 2h. Thịt bò giờ không được sạch lắm, nhất là phần đuôi có thể còn có mùi hôi, việc ngâm muối sẽ giúp cho thịt “sạch” hơn, khi ăn cũng mềm ngon hơn.",
      "Trong lúc đợi ngâm thịt thì chuẩn bị các nguyên liệu khác:",
      "Hành tây, hành khô (hành hương), gừng, mía để nguyên vỏ, nướng chín thơm. Nướng trực tiếp trên bếp điện, để lửa vừa để các thứ hành gừng có thể chín bên trong mà bên vỏ ngoài không bị cháy quá mức. Sau khi nướng xong thì cạo sạch vỏ gừng và hành (mía để nguyên vỏ).",
      "Rửa lại tất cả cho sạch. Hành tây có thể bổ đôi hoặc bổ tư.",
      "Gừng đập dập hoặc thái lát.",
      "Rễ mùi rửa sạch.",
      "Hoa hồi, quế, thảo quả, hạt mùi (nếu có) cho lên chảo rang ở lửa vừa đến khi dậy mùi thơm. Cho tất cả vào túi vải, buộc chặt miệng.",
      "Đổ hết nước ngâm, rửa lại đuôi bò, sườn bò và thịt bò bắp.",
      "Cho tất cả vào nồi, đổ nước lạnh ngập thịt rồi vặn lửa to đun sôi. Đợi nước sôi thì hạ lửa nhỏ đun thêm khoảng 1-2 phút rồi bỏ nước luộc này đi, rửa lại cho thật sạch vụn thịt và bọt bẩn. Nếu thịt bẩn thì có thể lặp lại bước luộc rửa này 1 lần nữa. Luộc với nước sôi thêm 1-2 lần cho thật sạch.",
      "Cho đuôi bò, sườn bò và thịt vào nồi, đổ thêm 4-5 bát to nước lạnh. Vặn lửa to, đợi nước sôi thì hớt bọt.",
      "Cho các thứ gia vị đã chuẩn bị vào nồi, gồm: Hành tây, hành hương, gừng, mía, rễ mùi, túi đựng hoa hồi, thảo quả, quế, hạt mùi.",
      "Nêm bột canh, bột gia vị hoặc muối. Không nên dùng nước mắm vì có thể làm nước phở bị chua.",
      "Để lửa nhỏ ninh trong khoảng 1,5-2h nếu dùng nồi thường, nồi áp suất sẽ nhanh hơn.",
      "Lưu ý là thịt bò bắp sẽ cần vớt ra trước, tránh để thịt bị quá mềm và nát. Bò bắp sau khi vớt ra có thể ngâm trong bát nước đun sôi để nguội, rồi thái lát mỏng.",
      "Trong quá trình đun có thể cần hớt bọt cho nước trong. Nếu cảm thấy thiếu nước thì thêm nước sôi (không dùng nước lạnh).",
      "Sau khi đuôi và sườn bò đã mềm nhừ thì nêm lại gia vị/bột canh hoặc muối cho vừa ăn. Có thể nêm hơi nhạt một chút để khi ăn cho thêm nước mắm.",
      "Nước dùng đạt sẽ có màu vàng nhẹ, trong và hơi sánh mỡ, có vị ngọt tự nhiên từ xương và mía, hương vị đậm đà.",
      "Chuẩn bị bánh phở và các loại rau thơm ăn kèm (hành, mùi rửa sạch, thái hành xanh thành khoanh tròn nhỏ, chẻ phần củ hành trắng, mùi thái nhỏ…).",
      "Trước khi ăn nên trần lại bát ăn phở và bánh phở qua nước sôi. Hai thứ này nóng sẽ giúp bát phở ngon hơn.",
      "Sắp bánh phở vào bát, sắp thịt, các loại rau thơm lên trên. Đun nước dùng cho thật sôi rồi chan vào bát. Dùng nóng với chanh tươi và (tương) ớt.",
    ],
  },
];
const user = {
  name: "Kiettisack",
  email: "kiettisack@gmail.com",
  image: require("../assets/author.jpg"),
};

export default function HomeScreen({ navigation, props }) {
  return (
    <>
      <SafeAreaView style={[styles.container, { paddingHorizontal: 12 }]}>
        <Button
          mode="outlined"
          onPress={() =>
            navigation.navigate("FoodRecipe", {
              title: "Phở",
              source: require("../assets/food-1.jpg"),
              foodRecipe: phoRecipe,
              user: user,
            })
          }
        >
          <Text>Mô tả món ăn</Text>
        </Button>
        <Button
          mode="outlined"
          onPress={() =>
            navigation.navigate("Profile", { title: "Kiettisack", user })
          }
        >
          <Text>Trang cá nhân</Text>
        </Button>
      </SafeAreaView>
    </>
  );
}
