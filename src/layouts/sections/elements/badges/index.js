import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import BadgesGradient from "layouts/sections/elements/badges/components/BadgesGradient";
import BadgesSimple from "layouts/sections/elements/badges/components/BadgesSimple";
import BadgesSimpleRounded from "layouts/sections/elements/badges/components/BadgesSimpleRounded";
import badgesGradientCode from "layouts/sections/elements/badges/components/BadgesGradient/code";
import badgesSimpleCode from "layouts/sections/elements/badges/components/BadgesSimple/code";
import badgesSimpleRoundedCode from "layouts/sections/elements/badges/components/BadgesSimpleRounded/code";

function Badges() {
  return (
    <BaseLayout
      title="Penieltech Badges"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/badges" },
        { label: "Penieltech Badges" },
      ]}
    >
      <View title="Penieltech Badges gradient" code={badgesGradientCode}>
        <BadgesGradient />
      </View>
      <View title="Penieltech Badges simple" code={badgesSimpleCode}>
        <BadgesSimple />
      </View>
      <View title="Penieltech Badges simple rounded" code={badgesSimpleRoundedCode}>
        <BadgesSimpleRounded />
      </View>
    </BaseLayout>
  );
}

export default Badges;
