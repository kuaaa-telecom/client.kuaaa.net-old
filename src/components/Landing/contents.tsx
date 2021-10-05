import React from 'react';
import {Box, Text} from '@chakra-ui/react';
import {ArrowDownIcon} from '@chakra-ui/icons';

export const More = () => {
  return (
    <Box id="more">
      <Text as="span" fontSize="2xl">KUAAA</Text> <ArrowDownIcon w={20} h={20}/> <Text as="span" fontSize="2xl">둘러보기</Text>
    </Box>
  );
};

export const Header = () => {
  return (
    <div id="header"> 고려대학교 아마추어 천문회 | Korea University Amateur Astronomical Association </div>
  );
};

export const About = () => {
  return (
    <div className="section-content">
      <div className="section-title">
      Lorem Ipsum
      </div>
      <div className="section-subtitle">
      Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
      </div>
      <div className="section-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor tellus est, et vehicula nibh convallis a. Nunc nisi lorem, placerat a tempor a, rhoncus ut mauris. Mauris elementum nulla ac metus commodo, vel rhoncus nibh mollis. Phasellus mattis placerat blandit. Maecenas vitae ipsum nec lacus faucibus lobortis. Praesent metus diam, viverra eget diam at, cursus condimentum erat. Nunc dignissim mi velit, id placerat nulla tincidunt venenatis. Nulla molestie neque tempus ante feugiat dapibus. Proin turpis purus, imperdiet nec blandit id, vehicula ac ex. Sed sagittis urna eros, sit amet condimentum massa cursus a. In porttitor dui ac libero interdum tincidunt. Morbi id nisi quis eros porta viverra eu at orci. Sed est eros, consequat rutrum nibh pharetra, ultrices viverra felis.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu dictum nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ac nulla a neque porta rutrum a ut metus. Vestibulum ut nulla sed nulla ultricies venenatis. Donec ullamcorper vehicula ligula, cursus pulvinar elit convallis a. Nullam pharetra, enim in venenatis molestie, ex nisl aliquam mauris, et aliquam nunc massa in ex. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nibh risus, congue ac euismod et, mattis sit amet elit. Aliquam congue justo ut est interdum molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam vitae varius lacus.

Vestibulum vel gravida dolor. Sed ligula enim, faucibus ac nunc eget, ornare imperdiet nisl. Vestibulum scelerisque pellentesque libero, ac lobortis metus viverra vitae. Pellentesque maximus elit nibh, sed congue mi finibus non. Integer interdum purus et pulvinar porta. Cras non ex id erat efficitur aliquet. Nam eu pharetra lectus. Sed vitae nunc eu orci molestie malesuada. Nullam at lorem ullamcorper orci ultricies lobortis vitae volutpat dolor. Vivamus consequat metus quis malesuada ultrices. Aenean vel libero in dui tristique cursus. Donec pretium arcu iaculis, viverra ante nec, sodales diam.
      </div>
    </div>
  );
};
