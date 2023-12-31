import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import ProgressSimple from "layouts/sections/elements/progress-bars/components/ProgressSimple";
import progressSimpleCode from "layouts/sections/elements/progress-bars/components/ProgressSimple/code";

function ProgressBars() {
  return (
    <BaseLayout
      title="Penieltech Progress Bars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/progress-bars" },
        { label: "Penieltech Progress Bars" },
      ]}
    >
      <View title="Penieltech Progress bar simple" code={progressSimpleCode}>
        <ProgressSimple />
      </View>
    </BaseLayout>
  );
}

export default ProgressBars;
