function le(e) {
  window.enmity.plugins.registerPlugin(e);
}
function se(e, o) {
  return window.enmity.modules.getModule(e, o);
}
function O(...e) {
  return window.enmity.modules.getByProps(...e);
}
function U(...e) {
  return window.enmity.modules.getByName(...e);
}
window.enmity.modules.common;
function me(e) {
  return window.enmity.patcher.create(e);
}
var ue = "AccountSwitcher",
  de = "1.0.5",
  ge = "Switch between multiple accounts.",
  he = "#64D3FF",
  ye = [{ name: "rolex7exe", id: "460344197849808897" }],
  b = { name: ue, version: de, description: ge, color: he, authors: ye };
function Y(e, o, r) {
  return window.enmity.utilities.findInReactTree(e, o, r);
}
const C = window.enmity.modules.common.Constants;
(window.enmity.modules.common.Clipboard,
  window.enmity.modules.common.Assets,
  window.enmity.modules.common.Messages,
  window.enmity.modules.common.Clyde,
  window.enmity.modules.common.Avatars);
const we = window.enmity.modules.common.Native,
  t = window.enmity.modules.common.React;
(window.enmity.modules.common.Dispatcher, window.enmity.modules.common.Storage);
const z = window.enmity.modules.common.Toasts,
  K = window.enmity.modules.common.Dialog,
  _ = window.enmity.modules.common.Token;
(window.enmity.modules.common.REST, window.enmity.modules.common.Settings);
const pe = window.enmity.modules.common.Users,
  R = window.enmity.modules.common.Navigation,
  I = window.enmity.modules.common.NavigationNative,
  X = window.enmity.modules.common.NavigationStack;
(window.enmity.modules.common.Theme, window.enmity.modules.common.Linking);
const D = window.enmity.modules.common.StyleSheet,
  H = window.enmity.modules.common.ColorMap;
window.enmity.modules.common.Components;
const T = window.enmity.modules.common.Locale,
  Se = window.enmity.modules.common.Profiles;
(window.enmity.modules.common.Lodash,
  window.enmity.modules.common.Logger,
  window.enmity.modules.common.Flux,
  window.enmity.modules.common.SVG);
const Ae = window.enmity.modules.common.Scenes,
  { components: n } = window.enmity;
n.Alert;
const Ee = n.Button;
n.FlatList;
const $ = n.Image;
(n.ImageBackground, n.KeyboardAvoidingView, n.Modal, n.Pressable);
const fe = n.RefreshControl,
  Ce = n.ScrollView;
(n.SectionList, n.StatusBar, n.StyleSheet, n.Switch);
const S = n.Text;
(n.TextInput, n.TouchableHighlight);
const P = n.TouchableOpacity;
(n.TouchableWithoutFeedback, n.Touchable);
const g = n.View;
(n.VirtualizedList, n.Form);
const q = n.FormArrow;
n.FormCTA;
const Te = n.FormCTAButton;
(n.FormCardSection, n.FormCheckbox, n.FormDivider, n.FormHint, n.FormIcon);
const F = n.FormInput;
(n.FormLabel, n.FormRadio);
const p = n.FormRow;
(n.FormSection,
  n.FormSelect,
  n.FormSubLabel,
  n.FormSwitch,
  n.FormTernaryCheckBox,
  n.FormText,
  n.FormTextColors,
  n.FormTextSizes);
function f(e) {
  return window.enmity.assets.getIDByName(e);
}
const j = O("loginToken"),
  { default: G } = se((e) => (e == null ? void 0 : e.ButtonColors)),
  J = (e) =>
    e.id
      ? {
          id: e.id,
          username: e.username,
          discriminator: e.discriminator,
          avatar: e.avatar,
          ...(e.email && { email: e.email }),
          ...(e.phone && { phone: e.phone }),
        }
      : {};
async function Q(e) {
  const o = await (
    await fetch("https://discord.com/api/v9/users/@me", {
      headers: { authorization: e },
    })
  ).json();
  return J(o);
}

async function loginWithPassword(email, password) {
  try {
    const res = await fetch("https://discord.com/api/v9/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login: email, password, undelete: false, login_source: null, gift_code_sku_id: null }),
    });
    const data = await res.json();
    if (data.token) return { token: data.token, error: null };
    if (data.mfa) return { token: null, error: "Bu hesap 2FA korumalı. Token ile giriş yapın." };
    const msg = (data.errors && data.errors.login && data.errors.login._errors && data.errors.login._errors[0] && data.errors.login._errors[0].message) || data.message || "Giriş başarısız.";
    return { token: null, error: msg };
  } catch (err) {
    return { token: null, error: "Ağ hatası: " + err.message };
  }
}

const Re = () => {
    const e = () => {
      j.logout();
    };
    K.show({
      isDismissable: !0,
      title: T.Messages.LOGOUT,
      body: T.Messages.USER_SETTINGS_CONFIRM_LOGOUT,
      confirmColor: "red",
      confirmText: T.Messages.LOGOUT,
      cancelText: T.Messages.CANCEL,
      onConfirm: e,
    });
  },
  Z = ({
    title: e = "Are you sure?",
    body: o,
    confirmColor: r,
    confirmText: i = "Yes",
    cancelText: m = "No",
    onConfirm: a,
    onCancel: c,
  }) => {
    K.show({
      isDismissable: !0,
      title: e,
      body: o,
      confirmColor: r,
      confirmText: i,
      cancelText: m,
      onConfirm: a,
      onCancel: c,
    });
  },
  A = {
    AddWhite: f("add_white"),
    Checkmark: f("Check"),
    Highlight: f("ic_highlight"),
    Key: f("ic_full_server_gating_24px"),
    MyAccount: f("ic_my_account_24px"),
    Passport: f("img_nitro_server_avatar"),
    Settings: f("settings"),
    TrashFilled: f("ic_trash_filled_16px"),
    Sort: f("ic_sort"),
  },
  ee = O("openLazy", "hideActionSheet"),
  V = O("hex2int"),
  ve = U("CustomColorPickerActionSheet"),
  te = ({
    onSelect: e,
    defaultColor: o = "#000000",
    resetText: r = T.Messages.RESET,
  }) => {
    const i = V.hex2int(o);
    ee.openLazy(() => Promise.resolve(ve), "CustomColorPicker", {
      color: i,
      onSelect: e,
      resetText: r,
      resetColor: i,
    });
  };
function k(e, o) {
  return window.enmity.settings.connectComponent(e, o);
}
const { ThemeColorMap: ne } = H;
function be({ account: e }) {
  if (!e) return null;
  const o = D.createThemedStyleSheet({
    linkless: {
      color: ne.HEADER_SECONDARY,
      fontFamily: C.Fonts.PRIMARY_SEMIBOLD,
      display: "flex",
      fontSize: 16,
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
    },
    link: {
      color: ne.HEADER_PRIMARY,
      fontFamily: C.Fonts.PRIMARY_SEMIBOLD,
      display: "flex",
      alignItems: "center",
      fontSize: 16,
      alignSelf: "center",
      justifyContent: "center",
    },
  });
  return t.createElement(
    g,
    null,
    ((r) =>
      typeof r == "string"
        ? t.createElement(S, { style: o.linkless }, r)
        : typeof r == "object" && r.username && !r.id
          ? t.createElement(S, { style: o.linkless }, r.username)
          : typeof r == "object" && r.username && r.id
            ? t.createElement(
                P,
                {
                  key: r.id,
                  onPress: () => Se.showUserProfile({ userId: r.id }),
                },
                t.createElement(S, { style: o.link }, r.username),
              )
            : null)(e),
  );
}
const { ThemeColorMap: x } = H,
  { RNCPushNotificationIOS: Ie } = we;
function Fe({ account: e, position: o, settings: r, navigation: i }) {
  const currentToken = _.getToken();
  const isCurrent = e.token === currentToken;

  const c = D.createThemedStyleSheet({
    container: {
      backgroundColor: "#2B2D31",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: isCurrent ? "#5865F2" : "#1E1F22",
      marginBottom: 12,
      padding: 12,
      flexDirection: "row",
      alignItems: "center",
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      marginRight: 12,
    },
    infoContainer: {
      flex: 1,
      justifyContent: "center",
    },
    name: {
      color: x.HEADER_PRIMARY,
      fontFamily: C.Fonts.PRIMARY_BOLD,
      fontSize: 16,
      marginBottom: 2,
    },
    status: {
      color: isCurrent ? "#2DC770" : x.HEADER_SECONDARY,
      fontFamily: C.Fonts.PRIMARY_SEMIBOLD,
      fontSize: 12,
      marginBottom: 2,
    },
    date: {
      color: x.HEADER_SECONDARY,
      fontFamily: C.Fonts.PRIMARY_MEDIUM,
      fontSize: 11,
      opacity: 0.7,
    },
    actions: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-end",
    },
    btnCopy: {
      backgroundColor: "#4E5058",
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 4,
      marginBottom: 6,
    },
    btnRemove: {
      backgroundColor: "#DA373C",
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 4,
    },
    btnText: {
      color: "white",
      fontSize: 12,
      fontFamily: C.Fonts.PRIMARY_BOLD,
    },
  });

  const avatarUrl = e.user.avatar
    ? `https://cdn.discordapp.com/avatars/${e.user.id}/${e.user.avatar}.png`
    : `https://cdn.discordapp.com/embed/avatars/${(e.user.discriminator || 0) % 5}.png`;
  const dateAdded =
    e.addedDate ||
    new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const switchAccount = () => {
    if (isCurrent) return;
    const l = () => {
      R.popAll();
      Ie.abandonPermissions();
      j.loginToken(e.token);
      z.open({
        content: `Switched to ${e.user.username}`,
        source: A.Checkmark,
      });
    };
    Z({
      body: `Switch to ${e.label || e.user.username}?`,
      onConfirm: l,
    });
  };

  return t.createElement(
    g,
    { style: c.container },
    t.createElement(
      P,
      { onPress: switchAccount },
      t.createElement($, { style: c.avatar, source: { uri: avatarUrl } })
    ),
    t.createElement(
      g,
      { style: c.infoContainer },
      t.createElement(
        S,
        { style: c.name },
        `${o + 1}. ${e.label || e.user.username}`
      ),
      t.createElement(
        S,
        { style: c.status },
        isCurrent ? "✓ Current Account" : "Tap avatar to switch"
      ),
      t.createElement(S, { style: c.date }, `Added: ${dateAdded}`)
    ),
    t.createElement(
      g,
      { style: c.actions },
      t.createElement(
        P,
        {
          style: c.btnCopy,
          onPress: () => {
            window.enmity.modules.common.Clipboard.setString(e.token);
            z.open({ content: "Token Copied", source: A.Checkmark });
          },
        },
        t.createElement(S, { style: c.btnText }, "Copy Token")
      ),
      t.createElement(
        P,
        {
          style: c.btnRemove,
          onPress: () => {
            const l = () => {
              const s = r.get("accounts", []);
              s.splice(o, 1);
              r.set("accounts", s);
              z.open({ content: "Account Deleted", source: A.Checkmark });
            };
            Z({
              body: `Delete ${e.label || e.user.username}?`,
              confirmColor: "red",
              onConfirm: l,
            });
          },
        },
        t.createElement(S, { style: c.btnText }, "Remove")
      )
    )
  );
}
const { createThemedStyleSheet: ke } = D;
var Me = ({ settings: e, navigation: o }) => {
  const [r, i] = t.useState(!1),
    m = () => {
      const s = e.get("accounts", []);
      return (
        Array.isArray(s) &&
        s.sort((d, y) => {
          var h, E;
          return (
            ((h = d.label) == null ? void 0 : h.localeCompare(y.label)) ||
            ((E = d.username) == null ? void 0 : E.localeCompare(y.username))
          );
        })
      );
    },
    [a, c] = t.useState(m()),
    l = ke({
      container: { flex: 1, padding: 5 },
    });
  return t.createElement(
    t.Fragment,
    null,
    t.createElement(
      g,
      { style: l.container },
      t.createElement(
        Ce,
        {
          style: l.container,
          refreshControl: t.createElement(fe, {
            refreshing: r,
            onRefresh: () => {
              (i(!0), c(m()), i(!1));
            },
          }),
        },
        Array.isArray(a) &&
          a.map((s, d) =>
            t.createElement(Fe, {
              account: s,
              position: d,
              settings: e,
              navigation: o,
            })
          ),
        t.createElement(p, {
          label: "Add Account (Token)",
          leading: t.createElement(p.Icon, { source: A.Key }),
          onPress: () => {
            o.navigate("AccountSwitcherAddAccount");
          },
        }),
        Boolean(_.getToken()) &&
          t.createElement(p, {
            label: "Add Current Account",
            leading: t.createElement(p.Icon, { source: A.MyAccount }),
            onPress: () => {
              o.navigate("AccountSwitcherAddAccount", {
                token: _.getToken(),
                user: J(pe.getCurrentUser()),
              });
            },
          }),
        t.createElement(p, {
          label: "Add Account (User/Pass)",
          leading: t.createElement(p.Icon, { source: A.Passport }),
          onPress: () => {
            Boolean(_.getToken()) && j.loginToken("");
            R.popAll();
            z.open({
              content: 'After logging in, use "Add Current Account" to add your account.',
              source: A.Highlight,
            });
          },
        }),
        Boolean(_.getToken()) &&
          t.createElement(Te, {
            color: "danger",
            label: T.Messages.LOGOUT,
            onPress: Re,
          })
      )
    )
  );
};
const N = X.createStackNavigator(),
  { createThemedStyleSheet: L } = D,
  { ThemeColorMap: v } = H;
function oe({ navigation: e = I.useNavigation() }) {
  const o = L({
    header: {
      tintColor: v.HEADER_PRIMARY,
      marginRight: 15,
      width: 18,
      height: 18,
    },
    wrapper: {
      marginRight: 15,
      width: 32,
      height: 32,
    },
  });
  return t.createElement(
    P,
    {
      styles: o.wrapper,
      onPress: () => {
        e.navigate("AccountSwitcherAddAccount");
      },
    },
    t.createElement($, { style: o.header, source: A.AddWhite })
  );
}
function re({
  settings: e,
  navigation: o = I.useNavigation(),
  route: r = I.useRoute(),
}) {
  const { account: i, position: m } = r.params,
    [a, c] = t.useState(i.token),
    [l, s] = t.useState(i.label || ""),
    [d, y] = t.useState(i.description || ""),
    [h, E] = t.useState(i.color || "#524FBF"),
    w = L({
      container: { flex: 1, padding: 16 },
      colorBlock: {
        minWidth: 24,
        height: 24,
        borderRadius: 3,
        marginHorizontal: 0,
        marginVertical: 0,
        marginRight: 8,
        justifyContent: "center",
        alignItems: "center",
      },
      colorText: {
        fontFamily: C.Fonts.PRIMARY_SEMIBOLD,
        color: C.Colors.PRIMARY_DARK_400,
      },
      row: { flexDirection: "row", alignItems: "center" },
    });
  return t.createElement(
    g,
    { style: w.container },
    t.createElement(F, {
      value: a,
      onChange: (u) => c(u),
      title: "Account Token",
    }),
    t.createElement(F, { value: l, onChange: (u) => s(u), title: "Label" }),
    t.createElement(F, {
      value: d,
      onChange: (u) => y(u),
      title: "Description",
    }),
    t.createElement(p, {
      label: () =>
        t.createElement(
          S,
          { adjustsFontSizeToFit: !0, style: w.colorText },
          "Color",
        ),
      trailing: () =>
        t.createElement(
          g,
          { style: w.row },
          t.createElement(g, { style: [w.colorBlock, { backgroundColor: h }] }),
          t.createElement(S, { style: w.colorText }, h),
          t.createElement(q, null),
        ),
      onPress: () => te({ onSelect: (u) => E(V.int2hex(u)), defaultColor: h }),
    }),
    t.createElement(
      g,
      { style: w.row },
      t.createElement(G, {
        onPress: async function () {
          const u = await Q(a),
            M = e.get("accounts", []);
          ((M[m] = {
            token: a,
            user: u,
            label: l || null,
            description: d || null,
            color: h || null,
          }),
            e.set("accounts", M),
            o.goBack());
        },
        text: "Save account",
      }),
    ),
  );
}
function ie({
  settings: e,
  navigation: o = I.useNavigation(),
  route: r = I.useRoute(),
}) {
  const { token: i, user: m } = (r == null ? void 0 : r.params) || {},
    [a, c] = t.useState(i || ""),
    [l, s] = t.useState(""),
    w = L({
      container: { flex: 1, padding: 16 },
    });
  return t.createElement(
    g,
    { style: w.container },
    t.createElement(F, {
      disabled: Boolean(i),
      value: a,
      onChange: (u) => c(u),
      title: "Account Token",
      placeholder: "Token yapıştır...",
    }),
    t.createElement(F, { value: l, onChange: (u) => s(u), title: "Label", placeholder: "Hesap adı..." }),
    t.createElement(
      g,
      { style: { flexDirection: "row", alignItems: "center", marginTop: 12 } },
      t.createElement(G, {
        onPress: async function () {
          try {
            if (!a) {
              z.open({ content: "Token giriniz.", source: A.TrashFilled });
              return;
            }
            const u = m || (await Q(a));
            if (!u || !u.id) {
              z.open({ content: "Geçersiz token veya hesap bulunamadı.", source: A.TrashFilled });
              return;
            }
            const M = e.get("accounts", []);
            M.push({
              token: a,
              user: u,
              label: l || null,
              description: null,
              color: null,
              addedDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
            });
            e.set("accounts", M);
            z.open({ content: "Hesap eklendi!", source: A.Checkmark });
            o.goBack();
          } catch (ex) {
            z.open({ content: "Hata: " + (ex.message || "Bilinmeyen hata"), source: A.TrashFilled });
          }
        },
        text: "Add account",
      }),
    ),
  );
}
function ce({ settings: e, navigation: o = I.useNavigation() }) {
  return t.createElement(Me, { settings: e, navigation: o });
}
function W({
  name: e = "pluginName",
  mainScreen: o = ce,
  addAccount: r = ie,
} = {}) {
  const i = L({
    container: { backgroundColor: v.BACKGROUND_MOBILE_SECONDARY, flex: 1 },
    cardStyle: {
      backgroundColor: v.BACKGROUND_MOBILE_PRIMARY,
      color: v.TEXT_NORMAL,
    },
    header: {
      backgroundColor: v.BACKGROUND_MOBILE_SECONDARY,
      shadowColor: "transparent",
      elevation: 0,
    },
    headerTitleContainer: { color: v.HEADER_PRIMARY },
    close: { color: v.HEADER_PRIMARY },
  });
  return t.createElement(
    N.Navigator,
    {
      initialRouteName: e,
      style: i.container,
      screenOptions: {
        cardOverlayEnabled: !1,
        cardShadowEnabled: !1,
        cardStyle: i.cardStyle,
        headerStyle: i.header,
        headerTitleContainerStyle: i.headerTitleContainer,
        headerTitleAlign: "center",
        safeAreaInsets: { top: 0 },
      },
    },
    t.createElement(N.Screen, {
      name: e,
      component: k(o, e),
      options: ({ navigation: m }) => ({
        headerTitle: "Account Switcher",
        headerTitleStyle: { color: "white" },
        headerLeft: () =>
          t.createElement(Ee, {
            color: i.close.color,
            title: "Close",
            onPress: () => R.pop(),
          }),
        headerRight: () => t.createElement(oe, { navigation: m }),
        ...X.TransitionPresets.ModalSlideFromBottomIOS,
      }),
    }),
    t.createElement(N.Screen, {
      name: "AccountSwitcherAddAccount",
      component: k(r, e),
      options: {
        headerTitle: "Add account",
        headerTitleStyle: { color: "white" },
        headerTintColor: i.close.color,
      },
    }),
    t.createElement(N.Screen, {
      name: "AccountSwitcherEditAccount",
      component: k(re, e),
      options: {
        headerTitle: "Edit account",
        headerTitleStyle: { color: "white" },
        headerTintColor: i.close.color,
      },
    }),
  );
}
function _e(e) {
  xe(e);
}
function xe(e) {
  const o = U("UserSettingsOverviewWrapper", { default: !1 });
  if (o) {
    const r = e.after(o, "default", (i, m, a) => {
      const c = Y(a, (l) => {
        var s;
        return (((s = l.type) == null ? void 0 : s.name) === "UserSettingsOverview");
      });

      if (!c || !c.type) { if (r) r(); return; }

      const patchRender = ({ props: { navigation: l } }, s, d) => {
        const enmitySection = Y(d, node =>
          node && node.props && node.props.key === "Enmity" &&
          node.type === n.FormSection
        );
        if (enmitySection && enmitySection.props) {
          let rows = enmitySection.props.children;
          if (!Array.isArray(rows)) rows = rows ? [rows] : [];
          const hasAS = rows.some(r => r && r.props && r.props.label === "Account Switcher");
          if (!hasAS) {
            rows.push(t.createElement(n.FormDivider, null));
            rows.push(t.createElement(p, {
              label: "Account Switcher",
              trailing: p.Arrow,
              onPress: () => R.push(W, { name: b.name }),
            }));
            enmitySection.props.children = rows;
          }
        }
      };

      if (c.type.prototype && c.type.prototype.render) {
        e.after(c.type.prototype, "render", patchRender);
      } else {
        e.after(c, "type", patchRender);
      }
      if (r) r();
    });
  }
}

function Be(e) {
  const o = e.before(ee, "openLazy", ({ hideActionSheet: r }, [i, m]) => {
    m === "StatusPicker" &&
      i.then((a) => {
        try {
          e.after(a, "default", (c, l, s) => {
            try {
              const list =
                s &&
                s.props &&
                s.props.children &&
                s.props.children[1] &&
                s.props.children[1].props &&
                s.props.children[1].props.children &&
                s.props.children[1].props.children.props &&
                s.props.children[1].props.children.props.children;
              if (!Array.isArray(list) || list.length === 0) return;
              const hasEntry = list.some(
                (x) => x && x.props && x.props.children && x.props.children.props && x.props.children.props.label === T.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE
              );
              if (hasEntry) return;
              list.push({
                ...list[0],
                props: {
                  children: t.createElement(p, {
                    leading: t.createElement(p.Icon, { source: A.Sort }),
                    label: T.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                    trailing: p.Arrow,
                    onPress: () => {
                      r();
                      R.push(W, { name: b.name });
                    },
                  }),
                },
              });
            } catch (_) {}
          });
          o();
        } catch (_) {}
      });
  });
}
const ae = U("Welcome", { default: !1 }),
  B = me("account-switcher");
  
  function onStart() {
      try { _e(B); } catch (err) { console.error("[AccountSwitcher] _e patch failed:", err); }
      try { Be(B); } catch (err) { console.error("[AccountSwitcher] Be patch failed:", err); }

      try {
        B.before(
          window.enmity.modules.common.Messages,
          "sendMessage",
          function (ctx, args) {
            try {
              if (
                typeof args[1]?.content === "string" &&
                args[1].content.startsWith("/login ")
              ) {
                const token = args[1].content.substring(7).trim();
                if (token) {
                  j.loginToken(token);
                  z.open({ content: "Logging in...", source: A.Checkmark });
                  args[1].content = "*Giriş yapılıyor...*";
                }
              }
            } catch (_) {}
          },
        );
      } catch (err) { console.error("[AccountSwitcher] sendMessage patch failed:", err); }

      try {
        const e = t.createElement(G, {
          onPress: () => R.push(W, { name: b.name }),
          style: { marginBottom: 0, backgroundColor: "#64d3ff" },
          text: "Account Switcher",
        });
        B.after(ae, "default", (r, i, m) => {
          try {
            const a = Y(m, (l) => {
              var s, d, y;
              return (
                ((y =
                  (d =
                    (s = l == null ? void 0 : l.children) == null
                      ? void 0
                      : s[0]) == null
                  ? void 0
                  : d.type) == null
                ? void 0
                : y.name) === "Button"
              );
            });
            if (!a || !a.children || a.children.length === 0) return;
            const hasEntry = a.children.some(
              (x) => x && x.props && x.props.text === "Account Switcher"
            );
            if (hasEntry) return;
            const c = a.children[a.children.length - 1].props.style;
            a.children[a.children.length - 1].props.style = [
              ...(Array.isArray(c) ? c : [c]),
              { marginBottom: 12 },
            ];
            a.children.push(e);
          } catch (_) {}
        });
      } catch (err) { console.error("[AccountSwitcher] Welcome patch failed:", err); }
    }

const De = {
    ...b,
    onStart,
    onStop() {
      B.unpatchAll();
    },
    getSettingsPanel({ settings: e }) {
      return t.createElement(g, {
        onLayout: () => {
          (R.pop(), R.push(W, { name: b.name }));
        },
      });
    },
  };
le(De);
