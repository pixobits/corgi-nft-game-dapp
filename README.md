# NFT game based Corgi Token

![Corgi token](https://i.pinimg.com/736x/fb/af/9e/fbaf9ed4eb140235f91c6ae13027960c.jpg)

Ngôn ngữ sử dụng: `Javascript, Solidity`

Lưu trữ art, photo, item trên nền tảng số và không bị copy 

Non-fungible token: không thể thay thế, và có nhiều giá trị (VD: nhà, kim cương, vị trí hoặc bức tranh ) → tạo ra một marketplace non-fungible items 

Fungible token: money có thể thay thế

---

 Đánh giá NFT

- Khan hiếm
- Cảm nhận
- chất lượng
- xu hướng lịch sử

Bộ sưu tập NFTs (tranh vẽ + baseball card + car + animals)

---

 Blockchain hoạt động với NFT như thế nào

- Mỗi người join blockchain network cụ thể, một hệ thống phi tập trung tức là không có ai làm chủ hệ thống đấy và cũng không được quản lý bởi chính phủ
    - Blockchain là một kiểu cơ sở dữ liệu phân tán trải khắp tất cả các thành phần tham dự vào nhóm đó
    - Mỗi giao dịch được ghi lại trong database, blockchain database không cho phép sửa hoặc xoá giao dịch, nó chỉ đơn giản là thêm vào theo thứ tự thời gian
    - Mỗi giao dịch được set 1 private key và 1 public key (ví dụ: public key là địa chỉ của email, và private key là khoá để mở cái hòm thư, khi public key được chia sẻ cho mọi người, private key phải giữ bí mật)
    - Để tạo một giao dịch trong blockchain thì yêu cầu phải sử dụng cả 2 khoá
    - Ví dụ trong 1 party, Lucy muốn gửi 10BTC đến cho Ana, thì Lucy gửi tín hiệu đến tất cả các người tham gia rằng ý định của anh ta muốn gửi 10BTC cho Lucy
    - Giao dịch sẽ được kí bởi private key của Lucy, chữ kí số có thể được xác thực bởi bất kì ai có thể truy cập public key của Lucy. Trong trường hợp này là mọi người trong mạng blockchain
    - Sau đó, người tham gia sẽ query vào database nhằm mục đích xác định là Lucy có 10BTC qua public key
    - Nếu được cả party thông qua thì giao dịch được chuyển vào hàng đợi để thực thi với nhiều transaction khác và sau khi hoàn tất Ana sẽ trở thành chủ của 10BTC và public key của Ana sẽ được liên kết với những crypto đó
    - Bằng chứng giao dịch được xác nhận
    - Và cứ thế các giao dịch nối với nhau thành một chuỗi khối ( chuỗi các giao dịch)
    - Bất cứ sự nỗ lực chỉnh sửa giao dịch đều lỗi và không xác thực

    ---

### Lợi ích

- Xác thực
- Bảo mật
- bảo vệ

---

### Ether

- Bitcoin được tạo ra vào năm 2008 bởi Satoshi
- Đồng tiền số Ether được tạo ra vào năm 2013 bở người nga có tên Vitalik Buterin
- Ether chạy trên nền tàng blockchain có tên ethereum, nó là cả tên gọi của đồng tiền số và nền tảng có tên là smart contract
- Không giống hệ thống client-server truyền thống, hệ thống tập trung EVM có chi phí thấp, quy mô lớn, giảm thiểu độ trễ và bảo mật và phi tập trung
- Ngôn ngữ hỗ trợ: Solidity
- File được viết bằng solidity được gọi là smart contract
- Và file này có thể được hoạt động với điều kiện cụ thể (có thể chỉnh sửa)
- Gas: phí dịch vụ cho những tính toán trên EVM
- Hợp đồng thông minh được sử dụng cho nhiều ứng dụng như dịch vụ tài chính, chăm sóc sức khoẻ, bất động sản, trò chơi và 1 trong số đó là NFT

---

## Crypto token

- Tóm lại blockchain là một sổ kế toán

 Định nghĩa: là một loại tiền điện tử sử dụng blockchain kết hợp smart contract, là phương tiện trao đổi để cung cấp giá trị cho một giao dịch

- Có 2 loại mã
    - Security token: đại diện cho quyền sở hữu với tài sản có giá trị
    - Utility token: cung cấp cho người dùng quyền truy cập vào sản phẩm hoặc dịch vụ trong tương lai ( ví dụ: công ty khởi nghiệp huy động vốn và giao cho nhà đầu tư utility token để họ có thể sử dụng các dịch vụ sau này của công ty )

---

## Non-fungible token

 Token không thể thay thế - có thể mua, bán và chứng minh quyền sở hữu với một số mặt hàng kĩ thuật số

- Ở trên thực tế, vật chất không thể thay thế như đất, thì người mua được cấp một chứng chỉ xác thực là sổ đỏ. Chủ sở hữu có thể tin tưởng được nó không phải là giả
- Nếu bán trong tương lai thì chứng chỉ sẽ được chuyển cho người mua
- Với tài sản kỹ thuật số, người bán gắn token cho một phiên bản duy nhất (non-fungible token)
- Sau đó NFT được lưu trữ trên blockchain không thay đổi
- Người mua có thể không nhận được quyền sở hữu, họ nhận được một phiên bản được ký điện tử bởi người tạo → sau đó có thể giao dịch với người khác
- 2018 ETH tạo ra tiêu chuẩn NFT được gọi là ERC-721
- ERC-721 là giao diện tiêu chuẩn và API, quy định chung để phát triển NFT
- ERC-721 kết nối ứng dụng với token store được lưu trữ trên ETH blockchain
- Tiêu chuẩn hợp đồng thông minh hỗ trợ chuyển token từ tài khoản này sang tài khoản khác và xác định người sỡ hữu token

### Quá trình tạo NFT và đưa nó lên thị trường

- Step 1: Yêu cầu 1 ví điện tử, ví này không lưu trữ tiền mà chỉ lưu trữ các public key và private key ( có thể lưu trữ token nếu muốn )
- Step 2: Nạp ETH để trừ phí gas
- Step 3: tìm flatform giao dịch như OpenSea, Rarible, Nifty Gateway và Super Rare. Tạo tài khoản, có thể liên kết ví qua public key để tạo tài khoản
- Step 4: Mua và bán NFT, đặt giá thầu nếu đó là cuộc đấu giá hoặc trả số tiền cố định nếu là giá có sẵn. Nếu mua thành công thì token sẽ được kí bằng private key của bạn và được lưu trong ETH blockchain. Hiện đã tồn tại hồ sơ chống giả mạo để chứng minh bạn là chủ sở hữu
- Để bán thì phải đăng tải và thêm thông tin, nhập tuỳ chọn muốn bán một NFT hay phát hành nhiều NFT, bán đấu giá hay cố định ?  → Bán → Tạo token duy nhất trên ETH Blockchain

[🔓Valuables](https://v.cent.co/)

- NFT mang lại giá trị cho những tài sản kỹ thuật số

---

## Challenges

- Tiêu thụ điện năng quá lớn trong quá trình tạo token
- Giải quyết việc nối các chuỗi khối lại là một công việc, và khi họ là người đầu tiên giải quyết được họ sẽ được phần thưởng. Để nhanh nhất thì đòi hỏi rất nhiều hiệu suất tính toán, đòi hỏi nhiều năng lượng
- Cung cấp năng lượng cho tiền điện tử là một mối quan tâm về môi trường
- Để đào được thì họ cần phải cọc và nếu gian lận thì sẽ mất cọc
- NFT có thể lưu trữ như việc cấp bằng, cấp các giấy chứng nhận

# Hướng dẫn chạy project
1. Đảm bảo máy bạn đã cài nodejs 
2. Chạy lệnh

```jsx
npm install @openzeppelin/contracts
npm install -g truffle
```

3. Để compile chạy lệnh
```jsx
truffle conpile
```